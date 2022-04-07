/**
 * @module Icon
 */
import PropTypes from 'prop-types'

/**
 * Helpers
 */
import { createBodyMarkup, getAria } from './helper'

/**
 * Styled components
 */
import { Wrapper, SvgWrapper } from './styled'

/**
 * Renders the svg icon as an image.
 *
 * This component is taking care of minimal styling related to sizing.
 * Please extend this component with your own styles when used.
 *
 * SVG file format - files should be exported in correct format:
 * - they should contain only paths (no figures)
 * - for coloring only fill (no stroke or others)
 *
 * @alias module:Icon
 * @param {string} className - Optional class name.
 * @param {string} src - Source path. Used with external files.
 * @param {string} label - Optional aria-label for the icon.
 * Only use if text (visually hidden or visible) can't be added outside the icon component.
 * @param {object} options
 */
const Icon = ({ className, src, label, options = {} }) => (
  <Wrapper className={className} {...getAria({ label })}>
    {options.inlineSvg ? (
      <SvgWrapper
        className="inlineSvg"
        aria-hidden="true"
        dangerouslySetInnerHTML={createBodyMarkup(src)}
        defaultOptions={options.default}
      />
    ) : (
      <img src={src} alt={label} />
    )}
  </Wrapper>
)

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.shape({
    inlineSvg: PropTypes.bool,
    default: PropTypes.shape({
      fill: PropTypes.string,
      stroke: PropTypes.string,
    }),
    hover: PropTypes.shape({
      fill: PropTypes.string,
      stroke: PropTypes.string,
    }),
  }),
}

export default Icon
