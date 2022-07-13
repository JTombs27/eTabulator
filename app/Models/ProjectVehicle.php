<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vehicle;
use App\Models\Project;

class ProjectVehicle extends Model
{
    use HasFactory;
    protected $table    = "project_vehicles";
    protected $guarded  = [];

    public function Vehicles()
    {
        return $this->belongsTo(Vehicle::class, 'vehicles_id', 'id');
    }

    public function Projects()
    {
        return $this->belongsTo(Project::class, 'projects_id', 'id');
    }
}
