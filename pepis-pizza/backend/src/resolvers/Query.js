const { forwardto } = require('prisma-binding');

const Query = {

    async productItems(parents, args, ctx, info) {
        const productItems = await ctx.db.query.productItems(
        {
            data: {
                ...args,
            }
        }
        );
        return productItems;
    },
};

module.exports = Query;
