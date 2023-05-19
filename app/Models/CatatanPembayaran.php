<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CatatanPembayaran
 * 
 * @property int $id_pembayaran
 * @property Carbon $tanggal_pembayaran
 * @property Carbon $tanggal_berakhir
 * @property int $metode_pembayaran
 * 
 *
 * @package App\Models
 */
class CatatanPembayaran extends Model
{
	protected $table = 'catatan_pembayaran';
	protected $primaryKey = 'id_pembayaran';
	public $timestamps = false;

	protected $casts = [
		'tanggal_pembayaran' => 'datetime',
		'tanggal_berakhir' => 'datetime',
		'metode_pembayaran' => 'int'
	];

	protected $fillable = [
		'tanggal_pembayaran',
		'tanggal_berakhir',
		'metode_pembayaran'
	];

	public function metode_pembayaran()
	{
		return $this->belongsTo(MetodePembayaran::class, 'metode_pembayaran');
	}
}
