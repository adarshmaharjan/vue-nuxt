const dataPromise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("Adarsh")
	},1000)
})

const data = await dataPromise.then((data)=>data)
console.log(data)
