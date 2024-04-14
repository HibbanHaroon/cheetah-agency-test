const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerDocs(app, port) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Todo List REST API Doc",
        version: "0.1.0",
        description:
          "This a Todo List API application made with Express and documentated with Swagger.",
        contact: {
          name: "Hibban Haroon - Todo List App Repo",
          url: "https://github.com/HibbanHaroon/cheetah-agency-test/tree/todo-list-api",
        },
      },
      servers: [
        {
          url: "https://todo-list-api-baq9.onrender.com/api",
        },
        {
          url: `http://localhost:${port}/api`,
        },
      ],
      paths: {
        "/tasks": {
          get: {
            summary: "Lists all the tasks",
            tags: ["Tasks"],
            responses: {
              200: {
                description: "The list of the tasks",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/Tasks",
                      },
                    },
                  },
                },
              },
            },
          },
          post: {
            summary: "Create a new task",
            tags: ["Tasks"],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Tasks",
                  },
                },
              },
            },
            responses: {
              200: {
                description: "The created task.",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Tasks",
                    },
                  },
                },
              },
              500: {
                description: "Some server error",
              },
            },
          },
        },
        "/tasks/{id}": {
          get: {
            summary: "Get the task by id",
            tags: ["Tasks"],
            parameters: [
              {
                in: "path",
                name: "id",
                schema: {
                  type: "string",
                },
                required: true,
                description: "The task id",
              },
            ],
            responses: {
              200: {
                description: "The task response by id",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Tasks",
                    },
                  },
                },
              },
              404: {
                description: "The task was not found",
              },
            },
          },
          put: {
            summary: "Update the task by the id",
            tags: ["Tasks"],
            parameters: [
              {
                in: "path",
                name: "id",
                schema: {
                  type: "string",
                },
                required: true,
                description: "The task id",
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Tasks",
                  },
                },
              },
            },
            responses: {
              200: {
                description: "The updated task",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Tasks",
                    },
                  },
                },
              },
              404: {
                description: "The task was not found",
              },
              500: {
                description: "Some error happened",
              },
            },
          },
          delete: {
            summary: "Remove the task by id",
            tags: ["Tasks"],
            parameters: [
              {
                in: "path",
                name: "id",
                schema: {
                  type: "string",
                },
                required: true,
                description: "The task id",
              },
            ],
            responses: {
              200: {
                description: "The task was deleted",
              },
              404: {
                description: "The task was not found",
              },
            },
          },
        },
      },
      components: {
        schemas: {
          Tasks: {
            type: "object",
            required: ["content", "status"],
            properties: {
              id: {
                type: "string",
                description: "The auto-generated id of the task",
              },
              content: {
                type: "string",
                description: "The content of the task",
              },
              status: {
                type: "string",
                description:
                  "The status of the task i.e., Completed or Pending",
              },
              createdAt: {
                type: "string",
                format: "date-time",
                description: "The auto-generated date the task was added",
              },
              updatedAt: {
                type: "string",
                format: "date-time",
                description:
                  "The auto-generated date the task was last updated",
              },
            },
          },
        },
      },
    },
    apis: ["./routes/*.js"],
  };

  const swaggerSpec = swaggerJsdoc(options);

  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON Format
  app.get("docs.json", (re, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

module.exports = swaggerDocs;
