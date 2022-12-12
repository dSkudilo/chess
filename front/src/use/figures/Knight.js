import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-knight.png.png'
import whiteLogo from '@/assets/white-knight.png.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Knight extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.KNIGHT
  }
}
