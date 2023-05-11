<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

/**
 * Class Admin
 * 
 * @property int $id_admin
 * @property string $nama_lengkap
 * @property Carbon $tanggal_lahir
 * @property string $alamat
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $no_hp
 * @property int $jenis_kelamin
 * 
 * @property Collection|PembuatAkunPakar[] $pembuat_akun_pakars
 *
 * @package App\Models
 */
class Admin extends Authenticatable
{
	use HasApiTokens;
	protected $table = 'admin';
	protected $primaryKey = 'id_admin';
	public $timestamps = false;

	protected $casts = [
		'tanggal_lahir' => 'string',
		'jenis_kelamin' => 'int'
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
		'jenis_kelamin'
	];

	public function kelamin()
	{
		return $this->belongsTo(JenisKelamin::class, 'jenis_kelamin');
	}

	public function pembuat_akun_pakars()
	{
		return $this->hasMany(PembuatAkunPakar::class, 'id_admin');
	}
}
