<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Class Pakar
 * 
 * @property int $id_pakar
 * @property string $nama_lengkap
 * @property Carbon $tanggal_lahir
 * @property string $asal
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $no_hp
 * @property int $jenis_kelamin
 * @property int $spesialis
 * @property int $status_akun
 * 
 * @property Spesiali $spesiali
 * @property Collection|Chat[] $chats
 * @property Collection|PembuatAkunPakar[] $pembuat_akun_pakars
 *
 * @package App\Models
 */
class Pakar extends Authenticatable
{
	use HasApiTokens;
	protected $table = 'pakar';
	protected $primaryKey = 'id_pakar';
	public $timestamps = false;

	protected $casts = [
		'tanggal_lahir' => 'datetime',
		'jenis_kelamin' => 'int',
		'spesialis' => 'int',
		'status_akun' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'nama_lengkap',
		'tanggal_lahir',
		'asal',
		'username',
		'email',
		'password',
		'no_hp',
		'jenis_kelamin',
		'spesialis',
		'status_akun'
	];

	public function status()
	{
		return $this->belongsTo(StatusAkun::class, 'status_akun');
	}

	public function spesiali()
	{
		return $this->belongsTo(Spesiali::class, 'spesialis');
	}

	public function kelamin()
	{
		return $this->belongsTo(JenisKelamin::class, 'jenis_kelamin');
	}

	public function chats_()
	{
		return $this->hasMany(Chat::class, 'to_pakar');
	}

	public function pembuat_akun_pakar_()
	{
		return $this->hasMany(PembuatAkunPakar::class, 'id_pakar');
	}
}
