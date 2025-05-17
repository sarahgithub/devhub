// src/pages/java/StreamOperations.jsx
import CopyableCodeBlock from "../../components/CopyableCodeBlock";

function StreamAPI() {
  return (
    <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Java Stream API – Intermediate and Terminal Operations (with Examples)</h1>
      <p>
        Learn Java Stream API with practical examples. This guide covers both intermediate and terminal operations with sample input and expected output to help you master Java streams.
      </p>

      {/* INTERMEDIATE OPERATIONS */}
      <h2>📘 Intermediate Operations</h2>
      <p>Intermediate operations return a new stream and allow method chaining. They are evaluated lazily and only run when a terminal operation is invoked.</p>

      <h3>1. filter()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3, 4, 5, 6]</code></p>
      <p><strong>Output:</strong> <code>[2, 4, 6]</code></p>
      <CopyableCodeBlock code={`List<Integer> evens = numbers.stream()
  .filter(n -> n % 2 == 0)
  .collect(Collectors.toList());`} />

      <h3>2. map()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3]</code></p>
      <p><strong>Output:</strong> <code>[1, 4, 9]</code></p>
      <CopyableCodeBlock code={`List<Integer> squares = numbers.stream()
  .map(n -> n * n)
  .collect(Collectors.toList());`} />

      <h3>3. flatMap()</h3>
      <p><strong>Input:</strong> <code>[[a, b], [c, d]]</code></p>
      <p><strong>Output:</strong> <code>[a, b, c, d]</code></p>
      <CopyableCodeBlock code={`List<String> allWords = listOfLists.stream()
  .flatMap(List::stream)
  .collect(Collectors.toList());`} />

      <h3>4. distinct()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 2, 3]</code></p>
      <p><strong>Output:</strong> <code>[1, 2, 3]</code></p>
      <CopyableCodeBlock code={`List<Integer> unique = numbers.stream()
  .distinct()
  .collect(Collectors.toList());`} />

      <h3>5. sorted()</h3>
      <p><strong>Input:</strong> <code>[3, 1, 4]</code></p>
      <p><strong>Output:</strong> <code>[1, 3, 4]</code></p>
      <CopyableCodeBlock code={`List<Integer> sorted = numbers.stream()
  .sorted()
  .collect(Collectors.toList());`} />

      <h3>6. peek()</h3>
      <p><strong>Input:</strong> <code>[10, 20]</code></p>
      <p><strong>Output:</strong> Console prints: <code>10</code>, <code>20</code></p>
      <CopyableCodeBlock code={`numbers.stream()
  .peek(System.out::println)
  .collect(Collectors.toList());`} />

      <h3>7. limit()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3, 4, 5]</code></p>
      <p><strong>Output:</strong> <code>[1, 2]</code></p>
      <CopyableCodeBlock code={`List<Integer> limited = numbers.stream()
  .limit(2)
  .collect(Collectors.toList());`} />

      <h3>8. skip()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3, 4]</code></p>
      <p><strong>Output:</strong> <code>[3, 4]</code></p>
      <CopyableCodeBlock code={`List<Integer> skipped = numbers.stream()
  .skip(2)
  .collect(Collectors.toList());`} />

      <h3>9. mapToInt() / boxed()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3]</code></p>
      <p><strong>Output:</strong> <code>[1, 2, 3]</code> (primitive → object)</p>
      <CopyableCodeBlock code={`IntStream intStream = numbers.stream().mapToInt(Integer::intValue);
List<Integer> boxed = intStream.boxed().collect(Collectors.toList());`} />

      <h3>10. parallel(), sequential()</h3>
      <p><strong>Output:</strong> Enables parallel processing of the stream</p>
      <CopyableCodeBlock code={`List<Integer> result = numbers.parallelStream()
  .map(n -> n * n)
  .sequential()
  .collect(Collectors.toList());`} />

      {/* TERMINAL OPERATIONS */}
      <h2>✅ Terminal Operations</h2>
      <p>Terminal operations trigger stream processing and produce a final result or side effect.</p>

      <h3>1. collect()</h3>
      <p><strong>Input:</strong> <code>Stream of names</code></p>
      <p><strong>Output:</strong> <code>List of names</code></p>
      <CopyableCodeBlock code={`List<String> namesList = names.stream()
  .collect(Collectors.toList());`} />

      <h3>2. forEach()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3]</code></p>
      <p><strong>Output:</strong> Prints: <code>1 2 3</code></p>
      <CopyableCodeBlock code={`numbers.stream().forEach(System.out::println);`} />

      <h3>3. reduce()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3]</code></p>
      <p><strong>Output:</strong> <code>6</code></p>
      <CopyableCodeBlock code={`int total = numbers.stream()
  .reduce(0, Integer::sum);`} />

      <h3>4. toArray()</h3>
      <p><strong>Output:</strong> Converts stream to array</p>
      <CopyableCodeBlock code={`Integer[] array = numbers.stream().toArray(Integer[]::new);`} />

      <h3>5. min(), max()</h3>
      <p><strong>Input:</strong> <code>[3, 5, 1]</code></p>
      <p><strong>Output:</strong> <code>min = 1</code></p>
      <CopyableCodeBlock code={`Optional<Integer> min = numbers.stream().min(Integer::compareTo);`} />

      <h3>6. count()</h3>
      <p><strong>Input:</strong> <code>[a, b, c]</code></p>
      <p><strong>Output:</strong> <code>3</code></p>
      <CopyableCodeBlock code={`long count = names.stream().count();`} />

      <h3>7. anyMatch(), allMatch(), noneMatch()</h3>
      <p><strong>Input:</strong> <code>[1, 2, 3]</code></p>
      <p><strong>Output:</strong> <code>true</code> if condition is met</p>
      <CopyableCodeBlock code={`boolean anyEven = numbers.stream().anyMatch(n -> n % 2 == 0);`} />

      <h3>8. findFirst(), findAny()</h3>
      <p><strong>Input:</strong> <code>[a, b, c]</code></p>
      <p><strong>Output:</strong> <code>a</code> (wrapped in Optional)</p>
      <CopyableCodeBlock code={`Optional<String> first = names.stream().findFirst();`} />

      <h3>9. close()</h3>
      <p><strong>Output:</strong> Executes onClose action</p>
      <CopyableCodeBlock code={`Stream<String> stream = Stream.of("A", "B")
  .onClose(() -> System.out.println("Closed"));
stream.close();`} />

      <hr />
      <p>
        <strong>Conclusion:</strong> Java Stream API enables powerful and expressive data processing. By learning both intermediate and terminal operations with real examples and output, you can write cleaner and more effective Java code.
      </p>
    </div>
  );
}

export default StreamAPI;
