import { useState } from "react";

const Calculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [calculatedBmi, setCalculatedBmi] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const height2 = height * 0.3048;
    setCalculatedBmi(Math.round(weight / (height2 * height2)));
  };

  console.log(calculatedBmi);

  return (
    <div className="flex items-center justify-center h-screen border-4  border-black">
      <div className="rounded-md bg-slate-100 border p-5 border-black">
        <div className="title">
          <h1 className="font-bold text-2xl">BMI Calculator</h1>
          <p>
            Enter the values and click the calculate button to get the results
          </p>

          {calculatedBmi ? (
            <div>
              <p>BMI : {calculatedBmi}</p>
              <p>
                {calculatedBmi <= 18.4
                  ? "UnderWeight"
                  : calculatedBmi <= 24.9
                  ? "Normal"
                  : calculatedBmi <= 39.9
                  ? "OverWeight"
                  : "Obese"}
              </p>
              <button
                className="bg-blue-800 text-white px-6 py-1 rounded mt-3"
                onClick={() => setCalculatedBmi(null)}
              >
                Calculate Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="Name-input px-4">
                <label htmlFor="" className="">
                  <p className="font-bold">Name</p>

                  <input
                    type="text"
                    className="my-4 w-9/12 rounded py-1 border border-black"
                    placeholder="Enter your Name"
                  />
                </label>
              </div>

              <div className="age-input px-4">
                <label htmlFor="" className="">
                  <p className="font-bold">Age</p>

                  <input
                    type="text"
                    className="my-4 w-9/12 rounded py-1 border border-black"
                    placeholder="Enter your Age"
                  />
                </label>
              </div>

              <div className="Height-input px-4">
                <label htmlFor="" className="">
                  <p className="font-bold">Height</p>

                  <input
                    type="text"
                    className="my-4 w-9/12 rounded py-1 border border-black"
                    placeholder="Enter your Height"
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </label>
              </div>

              <div className="weight-input px-4">
                <label htmlFor="" className="">
                  <p className="font-bold">Weight</p>

                  <input
                    type="text"
                    className="my-4 w-9/12 rounded py-1 border border-black"
                    placeholder="Enter your Weight"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </label>
              </div>

              <div className=" flex justify-center ">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-1 rounded-md"
                >
                  Calculate
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
