import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count, tally } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="border-2 border-purple-300 p-10 space-y-3">
        <div className="flex gap-6 ">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment by value
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
        <p className="text-center font-bold text-xl">{tally}</p>
      </div>
    </div>
  );
}

export default App;
