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
 * @property string $asal
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $no_hp
 * @property int $jenis_kelamin
 * @property int $status_akun
 * @property int $status_premium
 * @property int|null $detail_pembayaran
 * 
 * @property CatatanPembayaran|null $catatan_pembayaran
 * @property Collection|Chat[] $chats
 * @property Collection|Permintaan[] $permintaans
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
		'status_akun' => 'int',
		'status_premium' => 'int',
		'detail_pembayaran' => 'int'
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
		'status_akun',
		'status_premium',
		'detail_pembayaran'
	];

	public function kelamin()
	{
		return $this->belongsTo(JenisKelamin::class, 'jenis_kelamin');
	}

	public function status()
	{
		return $this->belongsTo(StatusAkun::class, 'status_akun');
	}

	public function status_premium_()
	{
		return $this->belongsTo(StatusPremium::class, 'status_premium');
	}

	public function catatan_pembayaran_()
	{
		return $this->hasMany(CatatanPembayaran::class, 'id_user');
	}

	public function chats_()
	{
		return $this->hasMany(Chat::class, 'to_user');
	}

	public function permintaans_()
	{
		return $this->hasMany(Permintaan::class, 'id_user');
	}
}