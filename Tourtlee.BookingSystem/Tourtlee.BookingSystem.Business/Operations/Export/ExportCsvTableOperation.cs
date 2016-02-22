using System.IO;
using System.Text;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Model.Export;

namespace Tourtlee.BookingSystem.Business.Operations.Export
{
    public class ExportCsvTableOperation : OperationBase<ExportTableRequest, MemoryStream>
    {
        private const string Separator = ",";

        public ExportCsvTableOperation(IOperationContext operationContext) : base(operationContext)
        {
        }

        protected override MemoryStream OnOperate(ExportTableRequest request)
        {
            var csvString = new StringBuilder();


            if (request.Headers != null && request.Headers.Count != 0)
            {
                csvString.Append(string.Join(Separator, request.Headers));
                csvString.AppendLine(Separator);
            }

            if (request.Values != null && request.Values.Count != 0)
            {
                foreach (var row in request.Values)
                {
                    if (row.Count != 0)
                    {
                        csvString.Append(string.Join(Separator, row));
                        csvString.AppendLine(Separator);
                    }
                }
            }

            var buffer = Encoding.Unicode.GetBytes(csvString.ToString());
            var ms = new MemoryStream(buffer);

            return ms;
        }
    }
}
