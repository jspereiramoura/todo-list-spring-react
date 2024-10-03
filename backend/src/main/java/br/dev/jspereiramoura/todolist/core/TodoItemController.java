package br.dev.jspereiramoura.todolist.core;

import br.dev.jspereiramoura.todolist.core.dtos.TodoItemInput;
import br.dev.jspereiramoura.todolist.core.dtos.TodoItemOutput;
import br.dev.jspereiramoura.todolist.core.dtos.UpdateItemStatusDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class TodoItemController {
  private final TodoItemService service;

  @PostMapping
  ResponseEntity<TodoItemOutput> create(@RequestBody TodoItemInput dto, UriComponentsBuilder uriComponentsBuilder) {
    var todoItem = service.create(dto);
    var uri = uriComponentsBuilder.path("/{id}").buildAndExpand(todoItem.description()).toUri();

    return ResponseEntity.created(uri).body(todoItem);
  }

  @GetMapping
  ResponseEntity<List<TodoItemOutput>> getAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/{id}")
  ResponseEntity<TodoItemOutput> getById(@PathVariable Long id) {
    return  ResponseEntity.ok(service.findById(id));
  }

  @PutMapping("/{id}")
  ResponseEntity update(@PathVariable Long id, @RequestBody UpdateItemStatusDto dto) {
    service.update(id,dto);
    return ResponseEntity.noContent().build();
  }
}
