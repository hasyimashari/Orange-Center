<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class MetodePembayaran
 * 
 * @property int $id_metode
 * @property string $metode
 * 
 * @property Collection|CatatanPembayaran[] $catatan_pembayarans
 *
 * @package App\Models
 */
class MetodePembayaran extends Model
{
	protected $table = 'metode_pembayaran';
	protected $primaryKey = 'id_metode';
	public $timestamps = false;

	protected $fillable = [
		'metode'
	];

	public function catatan_pembayarans()
	{
		return $this->hasMany(CatatanPembayaran::class, 'metode_pembayaran');
	}
}
