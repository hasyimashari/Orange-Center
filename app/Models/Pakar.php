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
 * @property string $alamat
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $no_hp
 * @property int $jenis_kelamin
 * @property int $status_akun
 * 
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
		'tanggal_lahir' => 'string',
		'jenis_kelamin' => 'int',
		'status_akun' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'nama_lengkap',
		'tanggal_lahir',
		'alamat',
		'username',
		'email',
		'password',
		'no_hp',
		'jenis_kelamin',
		'status_akun'
	];

	public function jenis_kelamin()
	{
		return $this->belongsTo(JenisKelamin::class, 'jenis_kelamin');
	}

	public function status_akun()
	{
		return $this->belongsTo(StatusAkun::class, 'status_akun');
	}

	public function pembuat_akun_pakars()
	{
		return $this->hasMany(PembuatAkunPakar::class, 'id_pakar');
	}
}
