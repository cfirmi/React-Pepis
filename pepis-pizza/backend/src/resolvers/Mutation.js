const Mutations = {

    async createproductItem(parent, args, ctx, info) {
        const productItem = await ctx.db.mutation.createproductItem({
            data: {
                // category: {
                //     connect: {
                //         id: ctx.request.categoryId,
                //     },
                // },
                ...args,
            },
        }, info);
        return productItem;
    }

};
module.exports = Mutations;
