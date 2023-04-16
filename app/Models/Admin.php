<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

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
class Admin extends Model
{
	protected $table = 'admin';
	protected $primaryKey = 'id_admin';
	public $timestamps = false;

	protected $casts = [
		'tanggal_lahir' => 'datetime',
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

	public function jenis_kelamin()
	{
		return $this->belongsTo(JenisKelamin::class, 'jenis_kelamin');
	}

	public function pembuat_akun_pakars()
	{
		return $this->hasMany(PembuatAkunPakar::class, 'id_admin');
	}
}
