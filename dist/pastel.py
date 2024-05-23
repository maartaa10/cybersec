def print_cake(candles):
    cake_top = "||::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::||"
    cake_bottom = "|_____________________________________________________________|"

    print(cake_top)
    print(cake_bottom)

    candle = " *"
    for _ in range(candles):
        cake_bottom = cake_bottom.replace("_", candle, 1)

    print(cake_bottom)


# Print a cake with 3 candles
print_cake(3)