package br.dev.jspereiramoura.todolist.core;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "todo_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoItem {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String description;
  private boolean completed;
}
