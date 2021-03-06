const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// Works
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    var category = await Category.findAll();
    res.status(200).json(category);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Works
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      // include: [{ }]
    });

    if (!categoryId) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Works
router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Works
router.put('/:id', async (req, res) => {
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).catch((err) => res.json(err));
  res.json(updateCategory);

});

// Works!
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;