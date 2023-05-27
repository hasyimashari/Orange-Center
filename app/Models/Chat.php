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
 * @property int|null $sentby_user
 * @property int|null $sentby_pakar
 * @property string $line_chat
 * @property Carbon $created_at
 * @property int $user_session
 * 
 * @property Pengguna|null $pengguna
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
		'pakar' => 'int',
		'sentby_user' => 'int',
		'sentby_pakar' => 'int',
		'user_session' => 'int'
	];

	protected $fillable = [
		'user',
		'pakar',
		'sentby_user',
		'sentby_pakar',
		'line_chat',
		'user_session'
	];

	public function pengguna()
	{
		return $this->belongsTo(Pengguna::class, 'sentby_user');
	}

	public function pakar()
	{
		return $this->belongsTo(Pakar::class, 'sentby_pakar');
	}
}
