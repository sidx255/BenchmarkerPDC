#region using

using System.IO;
using System.Threading;
using ICSharpCode.SharpZipLib.Zip.Compression;
using ICSharpCode.SharpZipLib.Zip.Compression.Streams;

#endregion

namespace Benchmarking.Compression
{
    internal class Deflate : BaseCompression
    {
        public override ulong Run(CancellationToken cancellationToken)
        {
            var iterations = 0uL;

            while (!cancellationToken.IsCancellationRequested)
            {
                for (var i = 0; i < LENGTH; i++)
                {
                    using Stream s = new MemoryStream();
                    using var stream = new DeflaterOutputStream(s, new Deflater(Deflater.BEST_COMPRESSION));
                    using var sw = new StreamWriter(stream);
                    sw.Write(Data);
                    sw.Flush();
                    stream.Flush();
                    stream.Finish();
                }

                iterations++;
            }

            return iterations;
        }

        public override string GetDescription()
        {
            return "Compressing data with Deflate";
        }

        public override ulong GetComparison(Options options)
        {
            switch (options.Threads)
            {
                case 1:
                {
                    return 1570;
                }
                default:
                {
                    return 1080;
                }
            }
        }
        
        public override double GetDataThroughput(ulong iterations)
        {
            return base.GetDataThroughput(iterations) * LENGTH;
        }

        public override string[] GetCategories()
        {
            return new[] {"compression", "deflate", "all"};
        }

        public override string GetName()
        {
            return $"{base.GetName()}-compression";
        }
    }
}