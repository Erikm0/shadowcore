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
            'name' => fake()->name(),
            'collection' => fake()->word(),
            'description' => fake()->paragraph(),
            'image_url' => fake()->imageUrl(),
            'color' => fake()->colorName(),
            'size' => fake()->randomElement(['S','M','L','XL','XXL']),
            'material' => fake()->word(),
            'fit' => fake()->randomElement(['loose','classic','slim','box']),
            'price' => fake()->randomFloat(),
            'GSM' => fake()->numberBetween(150, 200),
            'stock' => fake()->boolean(),
        ];
    }
}
