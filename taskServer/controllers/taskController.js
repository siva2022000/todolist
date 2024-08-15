let tasks = [];

function getAllTasksByDate(req, res) {
  console.log(req.params.date);
  res.json(tasks);
}

module.exports = {
  getAllTasksByDate,
};
