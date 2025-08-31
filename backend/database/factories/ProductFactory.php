<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => substr(fake()->name(), 0, 10),
            'collection' => fake()->word(),
            'description' => fake()->paragraph(),
            'image_url' => "https://placehold.co/2000x2000",
            'color' => fake()->randomElement(['white','black','red','purple']),
            'size' => fake()->randomElement(['S','M','L','XL','XXL']),
            'material' => fake()->randomElement(['Cotton','Denim','Fabric']),
            'fit' => fake()->randomElement(['loose','classic','slim','box']),
            'price' => fake()->randomFloat(2,20,100),
            'GSM' => fake()->numberBetween(150, 200),
            'stock' => fake()->numberBetween(20,100),
        ];
    }
}
