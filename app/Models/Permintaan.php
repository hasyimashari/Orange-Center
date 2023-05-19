<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Permintaan
 * 
 * @property int $id_permintaan
 * @property int $id_user
 * @property string $foto_produk
 * @property string $judul
 * @property string $deskripsi
 * @property int $stock
 * @property int $budget
 * 
 * @property Pengguna $pengguna
 *
 * @package App\Models
 */
class Permintaan extends Model
{
	protected $table = 'permintaan';
	protected $primaryKey = 'id_permintaan';
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int',
		'stock' => 'int',
		'budget' => 'int'
	];

	protected $fillable = [
		'id_user',
		'foto_produk',
		'judul',
		'deskripsi',
		'stock',
		'budget'
	];

	public function pengguna()
	{
		return $this->belongsTo(Pengguna::class, 'id_user');
	}
}
