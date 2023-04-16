<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class JenisKelamin
 * 
 * @property int $id_jenis_kelamin
 * @property string $jenis_kelamin
 * 
 * @property Collection|Admin[] $admins
 * @property Collection|Pakar[] $pakars
 * @property Collection|Pengguna[] $penggunas
 *
 * @package App\Models
 */
class JenisKelamin extends Model
{
	protected $table = 'jenis_kelamin';
	protected $primaryKey = 'id_jenis_kelamin';
	public $timestamps = false;

	protected $fillable = [
		'jenis_kelamin'
	];

	public function admins()
	{
		return $this->hasMany(Admin::class, 'jenis_kelamin');
	}

	public function pakars()
	{
		return $this->hasMany(Pakar::class, 'jenis_kelamin');
	}

	public function penggunas()
	{
		return $this->hasMany(Pengguna::class, 'jenis_kelamin');
	}
}
