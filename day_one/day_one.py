# count the number of times a depth measurement increases from the previous measurement.
def get_input(path):
    with open(path) as fp:
        list_of_inputs = []
        contents = fp.read().split()
        for entry in contents:
            list_of_inputs.append(int(entry))
        return list_of_inputs


if __name__ == '__main__':
    path = "puzzle_input.txt"
    puzzle_input = get_input(path)

    current_comp_depth = int(puzzle_input[0])
    increase_count = 0

    for depth in puzzle_input:
        if depth > current_comp_depth:
            increase_count += 1
        current_comp_depth = depth

    print(increase_count)

