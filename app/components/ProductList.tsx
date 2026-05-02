interface Product {
  readonly number: number;
  readonly name: string;
  readonly flag: string;
  readonly ingredients: string;
  readonly tagline: string;
}

interface ProductListProps {
  products: readonly Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {products.map((product) => (
        <div
          key={product.number}
          className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-transparent hover:border-johnnys-pink transition-all hover:shadow-xl"
        >
          <div className="flex items-start gap-4">
            <span className="text-6xl font-black font-display text-johnnys-pink/20 select-none">
              {product.number}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl" aria-label="Origin flag">
                  {product.flag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-black)] group-hover:text-johnnys-pink transition-colors">
                  {product.name}
                </h3>
              </div>
              <p className="text-xs uppercase tracking-[0.15em] font-bold text-johnnys-lime mb-3">
                {product.tagline}
              </p>
              <p className="text-sm md:text-base text-[var(--color-gray)] leading-relaxed">
                {product.ingredients}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
