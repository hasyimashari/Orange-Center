<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class StatusAkun
 * 
 * @property int $id_status_akun
 * @property string $status_akun
 * 
 * @property Collection|Pakar[] $pakars
 * @property Collection|Pengguna[] $penggunas
 *
 * @package App\Models
 */
class StatusAkun extends Model
{
	protected $table = 'status_akun';
	protected $primaryKey = 'id_status_akun';
	public $timestamps = false;

	protected $fillable = [
		'status_akun'
	];

	public function pakars()
	{
		return $this->hasMany(Pakar::class, 'status_akun');
	}

	public function penggunas()
	{
		return $this->hasMany(Pengguna::class, 'status_akun');
	}
}
