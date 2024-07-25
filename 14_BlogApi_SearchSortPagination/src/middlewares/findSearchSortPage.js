"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// QUERYHANDLER MIDDLEWARE:

module.exports = async (req, res, next) => {

    //? FILTERING & SEARCHING & SORTING & PAGINATION

        //? FILTERING:
        //? URL?filter[fieldName1]=value1&filter[fieldName2]=value2
        const filter = req.query?.filter || {}
        // console.log(filter)     


        //? SEARCHING:
        //? URL?search[fieldName1]=value1&search[fieldName2]=value2
        const search = req.query?.search || {}
        // console.log(search)
        //* https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        for (let key in search)
            search[key] = {$regex: search[key] }
        // console.log(search)
       

        //? SORTING:
        //? URL?sort[fieldName1]=asc&sort[fieldName2]=desc
        const sort = req.query?.sort || {}
        // console.log(sort)


        // PAGINATION:
        // URL?page=3&limit=15
        let limit = Number(req.query?.limit)
        limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
        // console.log(limit, typeof limit)

    //!--------------------------------------------------//!
        // PAGE:
        let page = Number(req.query?.page)
        page = page > 0 ? page : 1
        // SKIP:
        let skip = Number(req.query?.skip)
        skip = skip > 0 ? skip : ((page-1) * limit)
    //!--------------------------------------------------//!


        // RUN: 
        //  const data = await BlogPost.find({...filter, ...search}).sort(sort).skip(skip).limit(limit)
        //  const data = await BlogPost.find({...filter, ...search}).sort(sort).skip(skip).limit(limit).populate('categoryId')


        // GetModelList:
        res.getModelList = async function (Model, populate = null) {

            return await Model.find({...filter, ...search}).sort(sort).skip(skip).limit(limit)   //.populate(populate)
        }

        res.getModelListDetails = async function (Model) {
            
            const data = await Model.find({...filter, ...search })
            console.log(data.length)

            let details = {

                filter,
                search, 
                sort,
                skip,
                limit,
                page,
                pages: {
                    previous: (page > 1 ? page - 1 : false),
                    current: page,
                    next: page + 1,
                    total: Math.ceil(data.length / limit)
                },
                totalRecords: data.length
            }

            if (details.pages.next > details.pages.total) details.pages.next = false
            if (details.totalRecords <= limit) details.pages = false



            return details
        }

        next()
}


/* ------------------------------------------------------- */