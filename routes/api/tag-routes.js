const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Works!
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    var tag = await Tag.findAll();
    res.status(200).json(tag);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Works
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagId = await Tag.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      // include: [{ }]
    });

    if (!tagId) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Works
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Works
router.put('/:id', async (req, res) => {
  const updateTag = await Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  }).catch((err) => res.json(err));
  res.json(updateTag);
  
});

// Works
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteTag) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
