package br.dev.jspereiramoura.todolist.core;

import br.dev.jspereiramoura.todolist.core.dtos.TodoItemInput;
import br.dev.jspereiramoura.todolist.core.dtos.TodoItemOutput;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoItemService {
  private final TodoItemRepository repository;

  public TodoItemOutput create(TodoItemInput dto) {
    var savedItem = repository.save(TodoItemMapper.toEntity(dto));
    return TodoItemMapper.toDto(savedItem);
  }

  public List<TodoItemOutput> findAll() {
    return repository.findAll().stream().map(TodoItemMapper::toDto).toList();
  }

  public TodoItemOutput findById(Long id) {
    var entity = repository.findById(id).orElseThrow(
      () -> new EntityNotFoundException()
    );

    return TodoItemMapper.toDto(entity);
  }

  public void setCompleted(Long id) {
    var entity = repository.getReferenceById(id);
    entity.setCompleted(true);
  }
}
