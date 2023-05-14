<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models;
use App\Models\EventHeader;
use App\Models\EventSetup;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class RankingController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(EventHeader $model, EventSetup  $setup)
    {
        $this->model = $model;
        $this->setup = $setup;
    }    
    //
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $data = $this->model->where('id',$request->event_id)->first();
        $event_settup = $this->setup
                            ->with(['participants'=>function($q)
                            {
                               $q->selectRaw(
                                '
                                participants.*,
                                IFNULL((SELECT SUM(X.vote_value) FROM voting_tbl X WHERE X.participants_id = participants.id
                                                            AND X.settup_id = participants.settup_id),0) AS vote_value,
                                (
                                    (IFNULL((SELECT SUM(X.vote_value) FROM voting_tbl X WHERE X.participants_id = participants.id
                                                            AND X.settup_id = participants.settup_id),0)/
                                    IFNULL((SELECT count(X.id) FROM users X WHERE X.role = "Student"

                                    AND X.is_active = 1),0))*100
                                )  AS percentage_v
                               ')
                               ->orderBy('percentage_v','DESC')
                               ;
                            }])
                            ->where('event_id',$request->event_id)
                            ->get();
        //dd($event_settup);

        return inertia('EventHeader/Ranking',[
            'events' => $event_settup,
            'event_detail'=>$data
            ,
        ]);
    }
}
