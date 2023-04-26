<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
/**
 * Class Pengguna
 * 
 * @property int $id_user
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
 *
 * @package App\Models
 */
class Pengguna extends Authenticatable
{
	use HasApiTokens;
	protected $table = 'pengguna';
	protected $primaryKey = 'id_user';
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
}
