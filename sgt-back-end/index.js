const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
    from "grades"
    where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);
  if (!name || !course || !score) {
    res.status(400).json('error: invalid entry');

  } else if (name) {
    const sql = `
    INSERT INTO grades (name, course, score)
      values ($1, $2, $3);
    `;
    const params = [name, course, score];
    db.query(sql, params)
      .then(result => {
        res.status(201).json(req.body);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });

  } else {
    res.status(500).json({
      error: 'An unexpected error occurred.'
    });
  }

});

app.put('/api/grades/:id', (req, res, next) => {

});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Listening on 3000');
});
