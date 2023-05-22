<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Chat
 * 
 * @property int $id_chat
 * @property int $user
 * @property int $pakar
 * @property string $line_chat
 * @property Carbon $created_at
 * 
 * @property Pengguna $pengguna
 *
 * @package App\Models
 */
class Chat extends Model
{
	protected $table = 'chat';
	protected $primaryKey = 'id_chat';
	public $timestamps = false;

	protected $casts = [
		'user' => 'int',
		'pakar' => 'int'
	];

	protected $fillable = [
		'user',
		'pakar',
		'line_chat'
	];

	public function pakar()
	{
		return $this->belongsTo(Pakar::class, 'pakar');
	}

	public function pengguna()
	{
		return $this->belongsTo(Pengguna::class, 'user');
	}
}
