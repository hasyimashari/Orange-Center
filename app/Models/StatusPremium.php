<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class StatusPremium
 * 
 * @property int $id_premium
 * @property string $status_premium
 * 
 * @property Collection|Pengguna[] $penggunas
 *
 * @package App\Models
 */
class StatusPremium extends Model
{
	protected $table = 'status_premium';
	protected $primaryKey = 'id_premium';
	public $timestamps = false;

	protected $fillable = [
		'status_premium'
	];

	public function penggunas()
	{
		return $this->hasMany(Pengguna::class, 'status_premium');
	}
}
