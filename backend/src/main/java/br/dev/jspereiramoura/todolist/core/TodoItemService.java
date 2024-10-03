package br.dev.jspereiramoura.todolist.core;

import br.dev.jspereiramoura.todolist.core.dtos.TodoItemInput;
import br.dev.jspereiramoura.todolist.core.dtos.TodoItemOutput;
import br.dev.jspereiramoura.todolist.core.dtos.UpdateItemStatusDto;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    Pageable pageable = PageRequest.of(0, 10, Sort.by("id").ascending());
    return repository.findAll(pageable).map(TodoItemMapper::toDto).toList();
  }

  public TodoItemOutput findById(Long id) {
    var entity = repository.findById(id).orElseThrow(
      () -> new EntityNotFoundException()
    );

    return TodoItemMapper.toDto(entity);
  }

  public void update(Long id, UpdateItemStatusDto dto) {
    var entity = repository.getReferenceById(id);
    entity.setCompleted(dto.status());
    repository.save(entity);
  }
}
