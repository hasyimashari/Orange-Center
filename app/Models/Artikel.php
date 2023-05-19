<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Artikel
 * 
 * @property int $id_artikel
 * @property int $id_admin
 * @property string $judul
 * @property string $foto
 * @property string $content
 * @property Carbon $created_at
 * 
 * @property Admin $admin
 *
 * @package App\Models
 */
class Artikel extends Model
{
	protected $table = 'artikel';
	protected $primaryKey = 'id_artikel';
	public $timestamps = false;

	protected $casts = [
		'id_admin' => 'int'
	];

	protected $fillable = [
		'id_admin',
		'judul',
		'foto',
		'content'
	];

	public function admin()
	{
		return $this->belongsTo(Admin::class, 'id_admin');
	}
}
