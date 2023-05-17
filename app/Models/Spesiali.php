<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Spesiali
 * 
 * @property int $id_spesialis
 * @property string $spesialis
 * 
 * @property Collection|Pakar[] $pakars
 *
 * @package App\Models
 */
class Spesiali extends Model
{
	protected $table = 'spesialis';
	protected $primaryKey = 'id_spesialis';
	public $timestamps = false;

	protected $fillable = [
		'spesialis'
	];

	public function pakars()
	{
		return $this->hasMany(Pakar::class, 'spesialis');
	}
}
