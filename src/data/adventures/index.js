import soca26 from './post/soca26'
import ep2026 from './post/ep2026'
import verbier25 from './post/verbier25'
import grintovciExtrem from './post/grintovci-extrem'

export const adventures = [
  soca26,
  ep2026,
  verbier25,
  grintovciExtrem,
]

export const publicAdventures = adventures.filter((adventure) => adventure.public)

export const featuredAdventures = adventures.filter(
  (adventure) => adventure.public && adventure.featured,
)

export const adventureStats = {
  totalDistance: publicAdventures.reduce(
    (sum, adventure) => sum + adventure.distance,
    0,
  ),
  totalElevation: publicAdventures.reduce(
    (sum, adventure) => sum + adventure.elevation,
    0,
  ),
}