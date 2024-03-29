/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qLeOnWMRMqI
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function BattleCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Competitor A</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Competitor Overview</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Competitor A offers a range of products that excel in areas X and Y. However, they often struggle with
                Z.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Differentiation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our product excels in area Z, where Competitor A has shown weakness. Additionally, we offer unique
                features such as...
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Objection Handling</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                When customers compare our product to Competitor A, they often raise concerns about... Here's how you
                can respond...
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Market Opportunity</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our product is particularly well-suited to customers in the X and Y segments, where Competitor A's
                offerings are less effective.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Closing Statement</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                In comparison to Competitor A, our product offers unique advantages in...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
