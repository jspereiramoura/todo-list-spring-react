package br.dev.jspereiramoura.todolist.core.dtos;

public record TodoItemOutput(
  Long id,
  String description,
  boolean completed) {
}
