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
    # puzzle_input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

    current_comp_depth = int(puzzle_input[0])
    increase_count = 0

    for depth in puzzle_input:
        if depth > current_comp_depth:
            increase_count += 1
        current_comp_depth = depth

    print(increase_count)

    current_comp_sum_depth = puzzle_input[0] + puzzle_input[1] + puzzle_input[2]
    total_slice_depth_increase = 0

    for i in range(len(puzzle_input)):
        try:
            slice_to_examine = [puzzle_input[i], puzzle_input[i+1], puzzle_input[i+2]]
            total_of_slice = sum(slice_to_examine)
            if total_of_slice > current_comp_sum_depth:
                total_slice_depth_increase += 1
            current_comp_sum_depth = total_of_slice

        except IndexError:
            print("All done")
            break
    print(total_slice_depth_increase)




