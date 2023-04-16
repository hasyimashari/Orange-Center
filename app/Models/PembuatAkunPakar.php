<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PembuatAkunPakar
 * 
 * @property int $id_pembuatan
 * @property int $id_admin
 * @property int $id_pakar
 * 
 * @property Admin $admin
 * @property Pakar $pakar
 *
 * @package App\Models
 */
class PembuatAkunPakar extends Model
{
	protected $table = 'pembuat_akun_pakar';
	protected $primaryKey = 'id_pembuatan';
	public $timestamps = false;

	protected $casts = [
		'id_admin' => 'int',
		'id_pakar' => 'int'
	];

	protected $fillable = [
		'id_admin',
		'id_pakar'
	];

	public function admin()
	{
		return $this->belongsTo(Admin::class, 'id_admin');
	}

	public function pakar()
	{
		return $this->belongsTo(Pakar::class, 'id_pakar');
	}
}
