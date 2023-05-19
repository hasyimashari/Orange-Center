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
 * @property int|null $from_user
 * @property int|null $to_pakar
 * @property int|null $from_pakar
 * @property int|null $to_user
 * @property string $line_chat
 * @property Carbon $created_at
 * 
 * @property Pakar|null $pakar
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
		'from_user' => 'int',
		'to_pakar' => 'int',
		'from_pakar' => 'int',
		'to_user' => 'int'
	];

	protected $fillable = [
		'from_user',
		'to_pakar',
		'from_pakar',
		'to_user',
		'line_chat'
	];

	public function pakar()
	{
		return $this->belongsTo(Pakar::class, 'to_pakar');
	}

	public function pengguna()
	{
		return $this->belongsTo(Pengguna::class, 'to_user');
	}
}
