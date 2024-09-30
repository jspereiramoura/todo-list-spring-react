package br.dev.jspereiramoura.todolist.core;

import br.dev.jspereiramoura.todolist.core.dtos.TodoItemInput;
import br.dev.jspereiramoura.todolist.core.dtos.TodoItemOutput;

public class TodoItemMapper {
  private TodoItemMapper() {}

  public static TodoItem toEntity(TodoItemInput input) {
    var entity = new TodoItem();
    entity.setDescription(input.description());
    return entity;
  }

  public static TodoItemOutput toDto(TodoItem entity) {
    return new TodoItemOutput(
      entity.getId(),
      entity.getDescription(),
      entity.isCompleted()
    );
  }
}
