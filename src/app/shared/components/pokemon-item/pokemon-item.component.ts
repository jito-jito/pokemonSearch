import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {

  mockData = {
    abilities: [
      {
        ability: {
          name: "limber",
          url: "https://pokeapi.co/api/v2/ability/7/"
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: "imposter",
          url: "https://pokeapi.co/api/v2/ability/150/"
        },
        is_hidden: true,
        slot: 3
      }
    ],
    base_experience: 101,
    forms: [
      {
        name: "ditto",
        url: "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    game_indices: [
      {
        game_index: 76,
        version: {
          name: "red",
          url: "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        game_index: 76,
        version: {
          name: "blue",
          url: "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        game_index: 76,
        version: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "gold",
          url: "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "silver",
          url: "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "ruby",
          url: "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "sapphire",
          url: "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "firered",
          url: "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "leafgreen",
          url: "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "diamond",
          url: "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "pearl",
          url: "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "heartgold",
          url: "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "soulsilver",
          url: "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "black",
          url: "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "white",
          url: "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "black-2",
          url: "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        game_index: 132,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    height: 3,
    held_items: [
      {
        item: {
          name: "metal-powder",
          url: "https://pokeapi.co/api/v2/item/234/"
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: "ruby",
              url: "https://pokeapi.co/api/v2/version/7/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "sapphire",
              url: "https://pokeapi.co/api/v2/version/8/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version/9/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "firered",
              url: "https://pokeapi.co/api/v2/version/10/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "leafgreen",
              url: "https://pokeapi.co/api/v2/version/11/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "diamond",
              url: "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "pearl",
              url: "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "heartgold",
              url: "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "soulsilver",
              url: "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "black",
              url: "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "white",
              url: "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "black-2",
              url: "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "white-2",
              url: "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "x",
              url: "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "y",
              url: "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "omega-ruby",
              url: "https://pokeapi.co/api/v2/version/25/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version/26/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "sun",
              url: "https://pokeapi.co/api/v2/version/27/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "moon",
              url: "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "ultra-sun",
              url: "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            rarity: 5,
            version: {
              name: "ultra-moon",
              url: "https://pokeapi.co/api/v2/version/30/"
            }
          }
        ]
      },
      {
        item: {
          name: "quick-powder",
          url: "https://pokeapi.co/api/v2/item/251/"
        },
        version_details: [
          {
            rarity: 50,
            version: {
              name: "diamond",
              url: "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "pearl",
              url: "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "heartgold",
              url: "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "soulsilver",
              url: "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "black",
              url: "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "white",
              url: "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "black-2",
              url: "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "white-2",
              url: "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "x",
              url: "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "y",
              url: "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "omega-ruby",
              url: "https://pokeapi.co/api/v2/version/25/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version/26/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "sun",
              url: "https://pokeapi.co/api/v2/version/27/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "moon",
              url: "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "ultra-sun",
              url: "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            rarity: 50,
            version: {
              name: "ultra-moon",
              url: "https://pokeapi.co/api/v2/version/30/"
            }
          }
        ]
      }
    ],
    id: 132,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters",
    moves: [
      {
        move: {
          name: "transform",
          url: "https://pokeapi.co/api/v2/move/144/"
        },
        version_group_details: [
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "red-blue",
              url: "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "yellow",
              url: "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "gold-silver",
              url: "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "crystal",
              url: "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "ruby-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "emerald",
              url: "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "firered-leafgreen",
              url: "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "diamond-pearl",
              url: "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "platinum",
              url: "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "heartgold-soulsilver",
              url: "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "black-white",
              url: "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "colosseum",
              url: "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "xd",
              url: "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "black-2-white-2",
              url: "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "x-y",
              url: "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "omega-ruby-alpha-sapphire",
              url: "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "sun-moon",
              url: "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "ultra-sun-ultra-moon",
              url: "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "lets-go-pikachu-lets-go-eevee",
              url: "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "sword-shield",
              url: "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            level_learned_at: 1,
            move_learn_method: {
              name: "level-up",
              url: "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            version_group: {
              name: "scarlet-violet",
              url: "https://pokeapi.co/api/v2/version-group/25/"
            }
          }
        ]
      }
    ],
    name: "ditto",
    order: 214,
    past_types: [],
    species: {
      name: "ditto",
      url: "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      back_female: null,
      back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      back_shiny_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      front_female: null,
      front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      front_shiny_female: null,
    }
  }

  
}
