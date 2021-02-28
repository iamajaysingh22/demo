const router = require("express").Router();
const asyncMiddleware = require("../middleware/asyncMiddleware");
const validateTask = require("../validation/task");
const taskService = require("../service/task");
const auth = require("../middleware/auth");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    console.log(req.body);
    const { error } = validateTask(req.body);
    if (error) {
      return res
        .send("request failed!!! reason" + error.details[0].message)
        .status(400);
    }
    console.log(req.user);
    const result = await taskService.saveTask(req.user.id, req.body);
    if (result) return res.send("Task has been created successfully.");
  })
);
router.get(
  "/all/",
  auth,
  asyncMiddleware(async (req, res) => {
    const result = await taskService.getAll(req.user.id);
    console.log(result);
    if (result.length > 0) return res.send(result).status(200);

    return res.send("Was not found any task!").status(202);
  })
);

router.put(
  "/makecompleted/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    console.log(req.params.id);
    const result = taskService.makecompleted(req.params.id);
    return res.send("Task has marked completed.");
  })
);
router.put(
  "/makedeleted/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    console.log(req.params.id);
    const result = taskService.markedTaskDeleted(req.params.id);
    return res.send("Task has marked deleted.");
  })
);

router.delete(
  "/remove/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    //console.log(req.params.id);
    const result = await taskService.deleteTask(req.params.id);
    return res.send("Task has been deleted successfully!!");
  })
);

router.post(
  "/history/",
  auth,
  asyncMiddleware(async (req, res) => {
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const result = await taskService.taskHistory(
      req.user.id,
      startDate,
      endDate
    );
    return res.send(result);
  })
);

router.get(
  "/download/",
  auth,
  asyncMiddleware(async (req, res) => {
    const data = await taskService.getAll(req.user.id);
    const csvwriter = createCsvWriter({
      path: "./public/task.cs",
      header: [
        { id: "name", title: "Name" },
        { id: "description", title: "Discription" },
        { id: "createdAt", title: "Created Date" },
        { id: "completed", title: "completed status" },
      ],
    });

    csvwriter.writeRecords(data).then(() => {
      return res
        .send(
          `<a href="/resources/task.csv" download="task.csv" id="download-link"></a>`
        )
        .status(200);
    });
  })
);

module.exports = router;
