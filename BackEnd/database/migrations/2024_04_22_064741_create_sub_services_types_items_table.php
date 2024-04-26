<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_services_type_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('services_type_id');
            $table->unsignedBigInteger('sub_services_type_id');
            $table->foreign('services_type_id')->references('id')->on('services_types')->onDelete('cascade');
            $table->foreign('sub_services_type_id')->references('id')->on('sub_services_types')->onDelete('cascade');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_services_types_items');
    }
};
