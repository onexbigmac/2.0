export function parseSharedSlotsDynamic($element) {
  const colour = $element.find('[slot="colour"]').html()?.trim() || '';
  const title = $element.find('[slot="title"]').html()?.trim() || ' ';
  const text = $element.find('[slot="text"]').html()?.trim() || 'Text content goes here.';

  const content = {
    colour,
    title,
    text,
    bullets: [],
    images: []
  };

  // Collect bullets
  let index = 1;
  while (true) {
    const bullet = $element.find(`[slot="bullet${index}"]`);
    const bulletContent = $element.find(`[slot="bullet${index}content"]`);

    if (!bullet.length && !bulletContent.length) break;

    content.bullets.push({
      title: bullet.html()?.trim() || `Bullet ${index}`,
      content: bulletContent.html()?.trim() || `Bullet ${index} Content`
    });

    index++;
  }

  // Flatten bullets
  const bulletVars = {};
  content.bullets.forEach((b, i) => {
    bulletVars[`bullet${i + 1}`] = b.title || '';
    bulletVars[`bullet${i + 1}content`] = b.content || '';
  });
  for (let i = 1; i <= 4; i++) {
    bulletVars[`bullet${i}`] = bulletVars[`bullet${i}`] || '';
    bulletVars[`bullet${i}content`] = bulletVars[`bullet${i}content`] || '';
  }

  // Handle image slots
  const imageVars = {};
  let imageIndex = 1;

  $element.find('[slot^="img"]').each((_, el) => {
    const $imgSlot = $(el);
    const src = $imgSlot.attr('src') || $imgSlot.text().trim();

    if (src) {
      const alt = `Image - ${$imgSlot.attr('slot')}`;
      const tag = `<img src="${src}" class="my-custom-class img-fluid" alt="${alt}" />`;
      content.images.push(tag);
      imageVars[`img${imageIndex}Tag`] = tag;
      imageIndex++;
    }
  });

  // Ensure img1Tag–img4Tag exist
  for (let i = 1; i <= 4; i++) {
    imageVars[`img${i}Tag`] = imageVars[`img${i}Tag`] || '';
  }

  // Final return
  return {
    colour,
    title,
    text,
    ...bulletVars,
    ...imageVars
  };
}
