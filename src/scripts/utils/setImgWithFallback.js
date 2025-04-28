/**
 * setImgWithFallback
 * @param {HTMLImageElement} imgEl        – the <img> element in your DOM
 * @param {string}           src          – primary image URL
 * @param {string}           alt          – primary alt text
 * @param {string}           fallbackSrc  – (optional) backup image URL
 * @param {string}           fallbackAlt  – (optional) backup alt text
 */
export function setImgWithFallback(
    imgEl,
    src,
    alt,
    fallbackSrc = '/assets/images/fallback.png',
    fallbackAlt = 'image unavailable'
) {
    if (!imgEl) return;
    imgEl.alt = alt;
    imgEl.src = src;

    // one-time error handler
    function handleError() {
        imgEl.removeEventListener('error', handleError);
        imgEl.src = fallbackSrc;
        imgEl.alt = fallbackAlt;
    }

    imgEl.addEventListener('error', handleError, { once: true });
}
  